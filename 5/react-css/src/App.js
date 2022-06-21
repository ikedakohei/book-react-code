import { InlineStyles } from "./components/InlineStyles";
import { CssModules } from "./components/CssModules";
// import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
  return (
    <div>
      <InlineStyles />
      <CssModules />
      {/* <StyledJsx /> */}
      <StyledComponents />
      <Emotion />
      <TailwindCss />
    </div>
  );
};
