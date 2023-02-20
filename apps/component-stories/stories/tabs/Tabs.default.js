import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import LoremIpsum from 'react-lorem-ipsum';
import { Tabs } from 'tabs';
import { action } from '@storybook/addon-actions';
const Body1 = () => _jsx(LoremIpsum, { p: 2 });
const Body2 = () => _jsxs(_Fragment, { children: [_jsx("p", { children: "\uD83D\uDC7D \uD83D\uDC7E \uD83E\uDD16 \uD83D\uDE3A \uD83D\uDE38 \uD83D\uDE39 \uD83D\uDE3B \uD83D\uDE3C \uD83D\uDE3D \uD83D\uDE40" }), _jsx(LoremIpsum, { p: 1 })] });
const options = ['Tab1', 'Tab2'];
export const Default = () => {
    return _jsx(Tabs, { options: options, onTabClick: action('onTabClick') });
};
