import clsx from 'clsx';
import { useController } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/solid';

import RenderIf from '@/views/components/render-if';

/**
 * @typedef TextFieldProps
 * @property {Control<TFieldValues>} control
 * @property {object} [rules]
 * @property {string} [className]
 * @property {string} [inputClassName]
 * @property {string} [label]
 * @property {string} name
 * @property {string} [fieldName]
 * @property {string} [placeholder]
 * @property {('text'|'number'|'date'|'password')} type
 * @property {JSX.Element} [icon]
 * @property {boolean} [disabled]
 * @property {function} [resetField]
 */

/**
 * @param {TextFieldProps} props
 */
const TextField = ({
    control,
    rules = {},
    className = '',
    inputClassName = '',
    label = '',
    name = '',
    fieldName = null,
    placeholder = '',
    type = 'text',
    icon = null,
    disabled = false,
    resetField = null,
    action = null
}) => {
    const Icon = icon;

    const { field, fieldState } = useController({
        control,
        name,
        rules,
        defaultValue: ''
    });

    const showPicker = e => {
        return e.target.showPicker();
    };

    const Label = () => {
        if (!label) return null;
        return (
            <label className="flex justify-start px-0 text-sm font-semibold text-neutral-900 lg:text-base">
                {label}
            </label>
        );
    };

    return (
        <div className={clsx('', className)}>
            <Label />
            <div className="relative w-full">
                {icon && (
                    <Icon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white" />
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    className={clsx(
                        'w-full rounded-lg border border-slate-300 bg-cyan-700 px-4 py-3 text-white placeholder:font-light placeholder:text-white focus:outline-slate-400',
                        fieldState.error &&
                            '!border-2 !border-red-500 !text-red-500 focus:!outline-red-500',
                        Icon && 'pl-10',
                        inputClassName
                    )}
                    name={name}
                    ref={field.ref}
                    value={field.value}
                    onChange={e => field.onChange(e)}
                    onClick={type === 'date' ? showPicker : undefined}
                    disabled={disabled}
                />
                <RenderIf
                    when={
                        !!fieldState.error &&
                        fieldState.error.type === 'required'
                    }
                >
                    <p className="float-right text-xs text-red-500 lg:text-sm">
                        {fieldName ?? name} is required
                    </p>
                </RenderIf>
                <RenderIf when={field.value && (resetField || action)}>
                    <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-2 pr-4">
                        <RenderIf when={action}>{action}</RenderIf>
                        <RenderIf when={resetField}>
                            <div onClick={() => resetField(name)}>
                                <XMarkIcon className="h-4 w-4 cursor-pointer text-neutral-800" />
                            </div>
                        </RenderIf>
                    </div>
                </RenderIf>
            </div>
        </div>
    );
};

export default TextField;
