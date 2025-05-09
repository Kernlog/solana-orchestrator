use anchor_lang::prelude::*;

declare_id!("8zj9vrBBuQuJx5YnrNvPWwchz8vA6xdLdwVz7NKbnZYL");

#[program]
pub mod vault {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {} 