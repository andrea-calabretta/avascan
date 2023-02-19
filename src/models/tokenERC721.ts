  export interface FirstOwner {
      id: string;
  }

  export interface CurrentOwner {
      id: string;
  }

  export interface Detail {
      alias: string;
      owner: string;
      type: string;
      supertype: string;
      icon?: any;
      checkmark: number;
  }

  export interface Collection {
      address: string;
      name: string;
      symbol: string;
      detail: Detail;
  }

  export interface TokenERC721 {
      chainId: string;
      tokenAddress: string;
      tokenId: string;
      uriExternal: string;
      uri256: string;
      uri1024: string;
      imageMd5: string;
      createdAt: Date;
      blockNumber: number;
      txHash: string;
      firstOwner: FirstOwner;
      currentOwner: CurrentOwner;
      body: string;
      bodyType: string;
      collection: Collection;
  }

