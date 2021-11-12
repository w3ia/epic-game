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
        "https://publicdomainvectors.org/photos/mummy1.png", 
        10000,
        50               
    );

    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    let txn;

    txn = await gameContract.checkIfUserHasNFT();
    if (txn.name) {
        console.log("user has nft");
    } else {
        console.log("user does not have nft");
        txn = await gameContract.mintCharacterNFT(2);
        await txn.wait();

        txn = await gameContract.attackBoss();
        await txn.wait();

        txn = await gameContract.attackBoss();
        await txn.wait();

        console.log("Done!");
    }
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