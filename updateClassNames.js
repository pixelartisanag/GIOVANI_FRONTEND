const fs = require('fs');
const path = require('path');
const glob = require('glob');

const componentFiles = glob.sync('src/components/**/*.js'); // Adjust the path according to your project structure

componentFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');

    const scssImportRegex = /import\s+styles\s+from\s+'styles\/(.+).module.scss';/;
    const scssImportMatch = content.match(scssImportRegex);

    if (scssImportMatch) {
        const scssFileName = scssImportMatch[1];

        const scssFilePath = path.join('src', 'styles', `${scssFileName}.module.scss`);
        const scssContent = fs.readFileSync(scssFilePath, 'utf-8');

        let updatedComponentContent = content;
        let updatedScssContent = scssContent;

        const classNameRegex = /className="([\w\s-]+)"/g;
        let classNameMatch;

        while ((classNameMatch = classNameRegex.exec(content)) !== null) {
            const classNames = classNameMatch[1].split(' ');

            classNames.forEach((className) => {
                const styleVarName = className.replace(/-/g, '_');

                if (scssContent.includes(`.${className}`) && className !== styleVarName) {
                    // Replace class name in component
                    updatedComponentContent = updatedComponentContent.replace(className, `{styles.${styleVarName}}`);

                    // Replace class name in SCSS
                    updatedScssContent = updatedScssContent.replace(`.${className}`, `.${styleVarName}`);
                }
            });
        }

        // Write the updated contents back to the component and SCSS files
        fs.writeFileSync(filePath, updatedComponentContent, 'utf-8');
        fs.writeFileSync(scssFilePath, updatedScssContent, 'utf-8');

        console.log(`Updated ${filePath} and ${scssFilePath}`);
    }
});
