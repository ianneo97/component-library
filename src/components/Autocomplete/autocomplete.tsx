import {
    AutoComplete as AntdAutoComplete,
    AutoCompleteProps as AntdAutoCompleteProps,
} from "antd";

export interface AutoCompleteProps extends AntdAutoCompleteProps {}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
    return (
        <AntdAutoComplete
            {...props}
            className={`lfx-autocomplete ${props.className}`}
        />
    );
};

export { AutoComplete };
