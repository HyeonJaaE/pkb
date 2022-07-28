import {Header, Content, VoteInfo} from "../modules";

export default function MainTemplate() {
  return (
    <div className="container">
      <Header />
      <VoteInfo/>
      <Content />
    </div>
  );
}
