import {
  SvgCss,
  SvgCypress,
  SvgExpress,
  SvgGit,
  SvgJavascript,
  SvgJest,
  SvgMongodb,
  SvgMongoose,
  SvgNextjs,
  SvgNodejs,
  SvgReact,
  SvgRedux,
  SvgSass,
  SvgSocketio,
  SvgTestingLibrary,
  SvgTypescript,
} from '@/assets';
import styles from './Tools.module.scss';

export default function Tools() {
  return (
    <div className={styles.tools}>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgTypescript viewBox="0 0 400 400" className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>TypeScript</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgReact className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>React</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <div className={styles.nextjsIconWhiteFiller} />
          <SvgNextjs className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Next.js</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgRedux className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Redux</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgNodejs className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Node.js</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgExpress className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Express</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgMongoose className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Mongoose</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgMongodb className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>MongoDB</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgGit className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Git</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgCss className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>CSS</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgJavascript className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>JavaScript</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgSass className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Sass</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgSocketio className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Socket.io</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgCypress className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Cypress</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgJest className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Jest</div>
      </div>
      <div className={styles.toolsBox}>
        <div className={styles.toolsBoxContent}>
          <SvgTestingLibrary className={styles.toolsBoxIcon} />
        </div>
        <div className={styles.toolsBoxName}>Testing Library</div>
      </div>
    </div>
  );
}
