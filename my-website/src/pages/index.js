import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import SearchBar from '@theme/SearchBar';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const YOUR_BUTTONDOWN_LIST_ID = 'tnfsp';
  const YOUR_BUTTONDOWN_API_KEY = 'y9f21d966-4e71-4f0d-9762-b940f1ca3e06';

  const SubscribeForm = () => {
    const handleOnSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const email = formData.get('email');
      fetch(`https://api.buttondown.email/v1/subscribers?email=${email}&referrer=https://yourwebsite.com`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${YOUR_BUTTONDOWN_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          tags: ['homepage-subscription'],
          referrer_url: 'https://yourwebsite.com',
          metadata: {},
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert('訂閱成功！');
        })
        .catch((error) => {
          alert(`發生錯誤：${error.message}`);
        });
    };

    return (
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email地址</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="請輸入您的Email地址" required />
        </div>
        <button type="submit" className="btn btn-primary">訂閱</button>
      </form>
    );
  };

  return (
    <Layout
      title="春熊の心臟醫學"
      description="心臟外科的生活與挑戰">
      <div className={styles.container}>
        <h1>春熊の心臟醫學</h1>
        <h2>心臟外科的生活與挑戰</h2>

        {/* 搜索功能 */}
        <div className={styles.searchContainer}>
          <SearchBar />
        </div>

        <h3>關於我</h3>
        <p>
          歡迎來到春熊の心臟醫學！我是春熊，一位專注於心臟外科和重症醫學的醫生。在這個網站上，我將與您分享我的經驗、知識和心得，以及我在這個令人振奮的領域中所面臨的挑戰。
        </p>

        {/* 電子郵件訂閱表單 */}
        <SubscribeForm />

        <h3>聯繫方式</h3>
        <ul>
          <li>郵件：[aa2670095@gmail.com]</li>
          <li>Twitter：[@hsiang0401]</li>
          <li>Instagram：[@momobear_doctor]</li>
          <li>Facebook：[某某醫師 Dr. MOMO]</li>
        </ul>

        {/* 最近的博客文章（下拉菜單） */}
        {/* 最近的Twitter貼文（下拉菜單） */}
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
