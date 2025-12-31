const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between">
      <div>{children}</div>
      <div>
        <h1>This is sidebar</h1>
      </div>
    </div>
  );
};

export default layout;
