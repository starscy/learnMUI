import LangIcon from './LangIcon';

export default {
    title: 'Header/Иконка выбора языка',
    component: LangIcon,
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

const Template = (arg) => <LangIcon {...arg}/>;

export const Default = Template.bind({});
Default.args = {
    lang: 'Россия'
};

// export const Belarus = Template.bind({});
// Belarus.args = {
//     children: 'Беларусь'
// };