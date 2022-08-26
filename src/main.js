"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const Navbar_1 = __importDefault(require("./components/Navbar"));
const Home_1 = __importDefault(require("./components/Home"));
const GenOne_1 = __importDefault(require("./components/GenOne"));
const GenTwo_1 = __importDefault(require("./components/GenTwo"));
const GenThree_1 = __importDefault(require("./components/GenThree"));
const GenFour_1 = __importDefault(require("./components/GenFour"));
const GenFive_1 = __importDefault(require("./components/GenFive"));
const GenSix_1 = __importDefault(require("./components/GenSix"));
const GenSeven_1 = __importDefault(require("./components/GenSeven"));
const GenEight_1 = __importDefault(require("./components/GenEight"));
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <Navbar_1.default />
    <Home_1.default />
    <GenOne_1.default />
    <GenTwo_1.default />
    <GenThree_1.default />
    <GenFour_1.default />
    <GenFive_1.default />
    <GenSix_1.default />
    <GenSeven_1.default />
    <GenEight_1.default />
  </react_1.default.StrictMode>);
