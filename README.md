# MyQuest UI

This repository contains the frontend code for the MyQuest application, which is built using Angular framework.  It serves as the frontend of the application and retrieves data from an API provided by <a href="https://github.com/aimanabdollah/myquest-api"> this repository</a>. The MyQuest application is a quiz platform that allows users to test their knowledge of Malaysia's culture, history and facts at <a href="https://myquest-khaki.vercel.app/welcome">here.

## Installation

<p>Clone the repository to your local machine:</p>
<pre><code class="language-shell">git clone &lt;repository-url&gt;</code></pre>

<p>Navigate to the project directory:</p>
<pre><code class="language-shell">cd myquest-ui</code></pre>

<p>Install the dependencies:</p>
<pre><code class="language-shell">npm install</code></pre>

## Configuration

<p>In order to retrieve data from the API, you need to configure the API endpoint in the application.</p>

<p>Open the <code>src/app/service/questionservice.service.ts</code> file.</p>
<pre><code class="language-typescript">private baseApiUrl: 'http://api.example.com'; // Replace with your API endpoint URL </code></pre>

## Usage
<p>To start the MyQuest-UI application, run the following command:</p>
<pre><code class="language-shell">ng serve</code></pre>

<p>The application will be served at <code>http://localhost:4200/</code>. Open this URL in your web browser to access the application.</p>
