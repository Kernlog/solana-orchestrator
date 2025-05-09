use anchor_lang::prelude::*;

declare_id!("5xoTHKz9USUXd1WZu5Dkg7pFXsKXytmGJ1R2yLWJjzqR");

#[program]
pub mod orchestrator {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
