import UserPlanList from 'components/UserPlanList';
import AppLayout from 'components/Layouts/AppLayout';

const UserPlansPage = () => {
    const header = (
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Plans
        </h2>
    );

    const content = (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <UserPlanList />
                    </div>
                </div>
            </div>
        </div>
    );

    return <AppLayout header={header} children={content} />;
};

export default UserPlansPage;
