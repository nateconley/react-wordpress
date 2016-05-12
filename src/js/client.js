import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
	
	render() {
		var { name } = this.props;
		return (
			<h1>Hello, { name }!</h1>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout name="Nate" />, app);