import { Wallet } from "../data/wallets.interface";

export class WalletsService {
    private favoriteWallets: Wallet[] = [];

    addWalletToFavorites(wallet: Wallet) {
        this.favoriteWallets.push(wallet);
        console.log(this.favoriteWallets);
    }

    removeWalletFromFavorites(wallet: Wallet) {
        const position = this.favoriteWallets.findIndex((walletEl: Wallet) => {
            return walletEl.id == wallet.id;
        });
        this.favoriteWallets.splice(position, 1);
    }

    getFavoriteWallets() {
        return this.favoriteWallets.slice();
    }

    isWalletFavorite(wallet: Wallet) {
        return this.favoriteWallets.find((walletEl: Wallet) => {
            return walletEl.id == wallet.id;
        })
    }
}