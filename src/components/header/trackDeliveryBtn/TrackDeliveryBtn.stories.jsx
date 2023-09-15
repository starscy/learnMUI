import TrackDeliveryBtn from './TrackDeliveryBtn';

export default {
    title: 'Header/Кнопка доставки',
    component: TrackDeliveryBtn,
    argTypes: {
    },
}

const Template = (arg) => <TrackDeliveryBtn {...arg}/>;

export const Default = Template.bind({});
Default.args = {
};