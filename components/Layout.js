import Head from 'next/head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Layout = (props) => {
  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          {props.children}
        </div>
      </div>
    </div>
  )
}
export default Layout