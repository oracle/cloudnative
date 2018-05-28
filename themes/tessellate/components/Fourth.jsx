import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default function Fourth(props) {

  return (
		<section id="fourth" className="main">
		<hr/>
			<header>
			
				<div className="container">
					<h2>Find out more</h2>
					<p>Haven't learned enough? See the links below to dive deepter into OCI and Cloud Native development.</p>
					<br/>
					<ol>
						<li><a href="https://cloud.oracle.com/home">OCI Home</a></li>
						<li><a href="https://docs.us-phoenix-1.oraclecloud.com/Content/home.htm">OCI Documentation</a></li>
						<li><a href="https://blogs.oracle.com/cloudnative/">Cloud Native Blog</a></li>
					</ol>
				</div>
			</header>
			<div className="content style4 featured">
				<div className="container 75%">
					
				</div>
			</div>
		</section>
  );
}
