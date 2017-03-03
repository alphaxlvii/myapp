import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();
console.log(app);
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/LoginModel'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
