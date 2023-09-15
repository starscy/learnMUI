import Shedule  from './Shedule';

export default {
    title: 'Header/Расписание работы',
    component: Shedule,
    argTypes: {

    }
}

const Template = (arg) => <Shedule {...arg}/>;

export const Default = Template.bind({});
Default.args = {

};

