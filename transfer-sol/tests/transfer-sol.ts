import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TransferSol } from "../target/types/transfer_sol";

describe("transfer-sol", () => {

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const wallet = provider.wallet;

  const program = anchor.workspace.TransferSol as Program<TransferSol>;

	const lamps_per_sol = anchor.web3.LAMPORTS_PER_SOL;

  it("Transferring SOL!🤝", async () => {
	  // Add your test here.
	  const tx = await program.methods.transferSol(new anchor.BN(1 * lamps_per_sol)).accounts({
	    sender: wallet.publicKey,
	    receiver: "7UAfryUv2zkd145shr12TMpJr7YZz9dz16JB8HWzyUAT",
	    systemProgram: anchor.web3.SystemProgram.programId
	  }).rpc();

	  console.log("Your transaction signature", tx);

	});
});
