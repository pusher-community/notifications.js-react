/* global React,ReactDOM,NotificationsReact,Notifications,notifications*/

window.notifications = new Notifications({
  shouldRender: false,
});

const NotificationsWrapper = NotificationsReact.NotificationsWrapper;
class App extends React.Component {
  render() {
    return (
      <div>
        <NotificationsWrapper notifications={notifications} />
        <p>Hello World</p>
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

notifications.push('hello world');
