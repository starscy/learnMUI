import LanguagePopover from './LanguagePopover';

export default {
    title: 'Header2/Иконка выбора языка',
    component: LanguagePopover,
    argTypes: {
        lang: {
            type: 'string',
            name: 'country',
            description: 'Выбор страны',
            defaultValue: 'Россия',
            options: ['Россия', 'Беларусь', 'Казахстан'],
            control: {
                type: 'radio'
            }
        }
    },
}

const Template = (arg) => <LanguagePopover {...arg}/>;

export const Default = Template.bind({});
Default.args = {
    lang: 'Россия'
};

// export const Belarus = Template.bind({});
// Belarus.args = {
//     children: 'Беларусь'
// };