import Header from './Header';

export default {
    title: 'Header',
    component: Header,
    argTypes: {

    },
}

const Template = (arg) => <Header {...arg}/>;

export const Default = Template.bind({});
Default.args = {
};