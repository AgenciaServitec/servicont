interface Config {
  development: ConfigEnvironment;
  production: ConfigEnvironment;
}

interface ConfigEnvironment {
  izipay: {
    endpoint: string;
    publicKey: string;
  };
}

export const config: Config = {
  development: {
    izipay: {
      endpoint: "https://static.micuentaweb.pe",
      publicKey:
        "66586027:testpublickey_VUes4PRDtp5Srt1knLH0RndyPJ15I1fxGiruDYePw52QD",
    },
  },
  production: {
    izipay: {
      endpoint: "https://static.micuentaweb.pe",
      publicKey:
        "66586027:testpublickey_VUes4PRDtp5Srt1knLH0RndyPJ15I1fxGiruDYePw52QD",
    },
  },
};
