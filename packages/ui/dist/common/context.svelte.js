import { withPrefix } from '../utilities/internal.js';
import { getContext, setContext } from 'svelte';
const fieldKey = Symbol(withPrefix('field'));
export const setFieldContext = (context) => setContext(fieldKey, context);
export const getFieldContext = () => {
    return () => {
        const context = getContext(fieldKey);
        const { label, color = 'secondary', invalid = false, readOnly = false, required = false, disabled = false, description, ...restProps } = context?.() || {};
        return { label, description, color, invalid, readOnly, required, disabled, ...restProps };
    };
};
const tableKey = Symbol(withPrefix('table'));
export const setTableContext = (context) => setContext(tableKey, context);
export const getTableContext = () => {
    return () => {
        const context = getContext(tableKey);
        const { spacing = 'medium', size = 'medium', striped = false } = context?.() || {};
        return { spacing, size, striped };
    };
};
