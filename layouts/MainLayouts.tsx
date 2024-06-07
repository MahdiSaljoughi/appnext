interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  const {children} = props;

  return (
    <div> 
      <main>{children}</main>
    </div>
  );
};
export default MainLayout;