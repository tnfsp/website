import React from 'react';
import Layout from '@theme/Layout';
import {Button} from 'react-bootstrap';

const YOUR_BUTTONDOWN_API_KEY = '9f21d966-4e71-4f0d-9762-b940f1ca3e06';

const SubscribePage = () => {
  const handleOnClick = () => {
    window.open(`https://buttondown.email/api/emails/embed-subscribe/tnfsp`, 'popupwindow', 'scrollbars=yes,width=800,height=600');
    return true;
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h1>訂閱電子信</h1>
            <p>請在以下表單中輸入您的電子郵件地址以訂閱我們的電子信。</p>
            <form action={`https://buttondown.email/api/emails/embed-subscribe/tnfsp`} method="post" target="popupwindow" onsubmit="window.open('https://buttondown.email/api/emails/embed-subscribe/tnfsp', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
              <div className="form-group">
                <label htmlFor="email">Email地址</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="請輸入您的Email地址" required />
              </div>
              <Button variant="primary" onClick={handleOnClick}>訂閱</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SubscribePage;
