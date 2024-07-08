import VideoScreen from "./ui/VideoScreen";

const Screen: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-4 md:py-12">
      <VideoScreen
        thumbnailSrc="/Dashboard.png"
        videoSrc="https://www.youtube.com/embed/wyiZWYMilgk"
        alt="Dashboard preview"
      />
    </div>
  );
};

export default Screen;