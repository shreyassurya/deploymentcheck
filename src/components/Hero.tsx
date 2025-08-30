export const Hero = () => {
  return (
    <div className="w-max-screen-xl flex justify-center rounded-md pt-6">
      <video
        src={"https://cdn.pixabay.com/video/2025/01/10/251873_large.mp4"}
        className="rounded max-w-[820px]"
        controls={true}
      />
    </div>
  );
};
