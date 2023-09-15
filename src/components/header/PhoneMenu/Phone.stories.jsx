import Phone from './Phone';

export default {
    title: 'Header/Блок телефонных номеров/Телефон с гифкой',
    component: Phone,
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

const Template = (arg) => <Phone {...arg}/>;

export const Default = Template.bind({});
Default.args = {
    phoneNumber: '+7(499)979-98-56'
};

