import SheduleMenu  from './SheduleMenu';

export default {
    title: 'Header/Расписание работы меню',
    component: SheduleMenu,
    argTypes: {

    }
}

const Template = (arg) => <SheduleMenu {...arg}/>;

export const Default = Template.bind({});
Default.args = {

};

