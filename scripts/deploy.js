const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Liono", "Tigra", "Wolfy"],       
        ["https://gcdn.pbrd.co/images/8KVrv5LR7W7G.png",
        "https://gcdn.pbrd.co/images/1Fnf1WIxXqj8.png", 
        "https://gcdn.pbrd.co/images/Elkb2DaXIBau.png"],
        [300, 200, 100],                    
        [100, 75, 50],
        "Moon-Ra",
        "https://gcdn.pbrd.co/images/aWLIvu5r21pH.png", 
        10000,
        50               
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  };

  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  runMain();