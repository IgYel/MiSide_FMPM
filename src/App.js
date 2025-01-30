export const App = ({ Components }) => {
  const {
    HeaderComponent,
    MainComponent,
    FooterComponent,

    MoneyIcon,
    Player,
    MitaTest,
  } = Components;
  return (
    <>
      <HeaderComponent MoneyIcon={MoneyIcon} />
      <MainComponent Player={Player} MitaTest={MitaTest} />
      <FooterComponent />
    </>
  );
};
