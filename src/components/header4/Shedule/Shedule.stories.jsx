import Shedule  from './Shedule';

export default {
    title: 'Header2/Расписание работы',
    component: Shedule,
    argTypes: {

    }
}

const Template = (arg) => <Shedule {...arg}/>;

export const Default = Template.bind({});
Default.args = {

};

