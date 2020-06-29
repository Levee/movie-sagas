import React, { Component } from 'react';
import { PageHeader } from 'antd';

// const routes = [
//   {
//     path: '/',
//     breadcrumbName: 'Movies',
//   },
//   {
//     path: '/details',
//     breadcrumbName: 'Details',
//   },
//   {
//     path: '/edit',
//     breadcrumbName: 'Edit',
//   },
// ];

class Header extends Component {
  render() {
    return (
      <>
        {/* <header>
          <h1>Movies Galore!</h1>
        </header> */}
        <PageHeader
          className="site-page-header"
          title="Movies Galore!"
          // breadcrumb={{ routes }}
          subTitle="The best movies on this side of the galaxy!"
        />
      </>
    )
  }
}

export default Header;