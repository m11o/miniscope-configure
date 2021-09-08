import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='body'>
        <label>データ ディレクトリ</label>
        <input name='dataDirectory' type='text' />

        <label>保存ディレクトリ構造</label>
        <input name='directoryStructure' type='text' />

        <label>研究者名</label>
        <input name='researcherNmae' type='text' />

        <label>実験名</label>
        <input name='experimentName' type='text' />

        <label>動物名</label>
        <input name='animalName' type='text' />

        <label>カスタム変数</label>
        <input name='customEntry0' />

        <label>レコーディングの長さ</label>
        <input name='recordLengthinSeconds' type='number' />

        <label>デバイス名</label>
        <input name='devices[][name]' type='text' />

        <label>デバイスタイプ</label>
        <input name='devices[][deviceType]' type='text' />

        <label>デバイスID</label>
        <input name='devices[][deviceID]' type='text' default='0' />

        <label>サチュレーションを表示する</label>
        <input name='devices[][showSaturation]' type='text' default='1' />

        <label>動画圧縮方法</label>
        <input name='devices[][compression]' type='text' />

        <label>1ファイルごとのフレーム</label>
        <input name='devices[][framesPerFile]' type='text' />

        <label>ゲイン</label>
        <input name='devices[][gain]' type='text' />

        <label>動的プレートのデフォルトの高さ</label>
        <input name='devices[][ewl]' type='text' />

        <label>LEDの初期設定</label>
        <input name='devices[][led0]' type='text' />

        <label>フレームレイト</label>
        <input name='devices[][frameRate]' type='text' />
      </div>
    </div>
  );
}

export default App;
