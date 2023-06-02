import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Popper from 'popper.js';
import { initThemeScript } from './theme';

library.add(fas);

export function useInitTheme() {
    useEffect(() => {
        initThemeScript();
    }, []);
}