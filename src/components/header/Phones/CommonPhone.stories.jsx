import CommonPhone from './CommonPhone';

export default {
    title: 'Header/Блок телефонных номеров',
    component: CommonPhone,
    argTypes: {
        city: {
            type: 'string',
            name: 'cities',
            description: 'Выбор города',
            defaultValue: '+7(499)979-98-56',
            options: ['Москва', 'Санкт- Петербург'],
            control: {
                type: 'radio'
            }
        },
        phoneNumber: {
            type: 'string',
            name: 'phone numbers',
            defaultValue: '+7(499)979-98-56',
            options: ['+7(499)979-98-56', '+7(812)209-18-80'],
            control: {
                type: 'radio'
            }
        }
    }
}

const Template = (arg) => <CommonPhone {...arg}/>;

export const Default = Template.bind({});
Default.args = {
    city: 'Москва',
    phoneNumber: '+7(499)979-98-56'
};

