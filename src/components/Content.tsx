import React from 'react';

const Content = () => {
  return (
    <main className="content">
      <section className="subsection">
        Hi! Welcome to my corner of the internet :)
        <br />
        <br /> I'm a Year 3 student studying Information Systems at Singapore
        Management University. I'm motivated by problem solving with real world
        needs, and the bouncing of meaningful ideas between like-minded friends.
        <br />
        <br /> My main interests lie in web development, performance and dev
        tooling. I'm also a huge fan of keeping well-documented and clean
        codebases. With JS projects, I try to do this via TypeScript (huge fan
        too) and JSDocs, but this is still something I'm learning and grappling
        with.
        <br />
        <br /> I love open source projects, so I do want to get started
        contributing in 2022. I do have some ideas on the backburner and one or
        two with a skeleton finish, but HMU if you've something to share too!
        <br />
      </section>
      <section className="subsection">
        <h4>Current Tools</h4>
        Not yet well-used, but listing them here for easy recording:
        <ul>
          <li>
            <a href="https://obsidian.md/">Obsidian</a> - for note-taking in
            markdown (synced to{' '}
            <a href="https://github.com/gilite/notes">this repo</a>)
          </li>
          <li>
            <a href="https://gist.github.com/">GitHub Gists</a> - for things I
            keep looking back to
            <ul>
              <li>
                <a href="https://gist.github.com/gilite/11dda83275516c7ddad35c79e74c465f">
                  Linux/MacOS commands
                </a>
              </li>
              <li>
                <a href="https://gist.github.com/gilite/95007ffb94a3991f97d51e8d0bc231b5">
                  VSCode Settings + hotkeys
                </a>
              </li>
              <li>
                <a href="https://gist.github.com/gilite/f465d8362c2b7c77284b1455b1f8c5ed">
                  Regex
                </a>
              </li>
              <li>
                <a href="https://gist.github.com/gilite/e913b985d464e4be745d4282424f1de6">
                  A few Vim shortcuts
                </a>
              </li>
              <li>
                <a href="https://gist.github.com/gilite/5b64a4802678294a4de266c1588b1d26">
                  Some git commands (incomplete)
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://www.alfredapp.com/">Alfred</a> - for macOS hotkeys
            and workflow hacks
          </li>
          <li>
            <a href="https://calendar.cron.com/</li>">Cron</a> - calendar with
            an intuitive UI
          </li>
          <li>
            <a href="https://apps.apple.com/us/app/smart-countdown-timer/id1410709951?mt=12">
              Smart Countdown Timer
            </a>{' '}
            - for time-boxing work
          </li>
        </ul>
      </section>
      <section className="subsection">
        <h4>Goals for the Year 2022</h4>
        <ol>
          <li>
            Start on OSS work - contribute to 1 repo with &gt;= 3 PRs + create 1
            full-fledged npm package.
          </li>
          <li>
            Learn the following technologies deeply - TypeScript, React and
            GraphQL.
          </li>
          <li>Complete 3-5h of deep work every working day.</li>
        </ol>
      </section>
      <br />
      <br />
      <br />
    </main>
  );
};

export default Content;
