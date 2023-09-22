import TrackDelivery from './TrackDelivery';

export default {
    title: 'Header2/Кнопка доставки',
    component: TrackDelivery,
    argTypes: {
    },
}

const Template = (arg) => <TrackDelivery {...arg}/>;

export const Default = Template.bind({});
Default.args = {
    children: 'Отследить доставку'
};