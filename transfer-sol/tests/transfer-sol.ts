import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TransferSol } from "../target/types/transfer_sol";

describe("transfer-sol", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.TransferSol as Program<TransferSol>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
