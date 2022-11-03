use anchor_lang::prelude::*;
use anchor_lang::solana_program;
declare_id!("CxpWjEEVCzuRZjUWUgi1kEn7dLu58rLfcTuxjZpPeaf1");

#[program]
pub mod transfer_sol {
    use super::*;

    pub fn transfer_sol(ctx: Context<TransferSol>, amount: u64) -> Result<()> {

        let send_account = &mut ctx.accounts.sender;
        let receiver_account = &mut ctx.accounts.receiver;
        let amount_to_send = amount;

        let tx = solana_program::system_instruction::transfer(
            &send_account.key(),
            &receiver_account.key(),
            amount_to_send,
        );

        let acount_info = [
            send_account.to_account_info(),
            receiver_account.to_account_info(),
        ];

        solana_program::program::invoke(&tx, &acount_info)?;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct TransferSol<'info> {
    #[account(mut)]
    pub sender: Signer<'info>,
    /// CHECK: Don't need to check
    #[account(mut)]
    pub receiver: UncheckedAccount<'info>,
    system_program: Program<'info, System>,
}
