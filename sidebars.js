/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  overview: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'overview/getting-started/intro',
        'overview/getting-started/avalanche-platform',
        'overview/getting-started/avalanche-consensus',
        {
          type: 'link',
          label: 'Whitepapers',
          href: 'https://www.avalabs.org/whitepapers',
        },
      ],
    },
    'overview/projects',
    {
      type: 'link',
      label: 'Audits',
      href: 'https://github.com/ava-labs/audits',
    },
  ],

  quickStart: [
    'quickstart/README',
    'quickstart/create-a-local-test-network',
    'quickstart/fund-a-local-test-network',
    'quickstart/fuji-workflow',
    'quickstart/cross-chain-transfers',
    'quickstart/multisig-utxos-with-avalanchejs',
    'quickstart/transaction-fees',
    'quickstart/adjusting-gas-price-during-high-network-activity',
    'quickstart/sending-transactions-with-dynamic-fees-using-javascript',
    'quickstart/tools-list',
    'quickstart/integrate-exchange-with-avalanche'
  ],
  dapps: [
    'dapps/launch-your-ethereum-dapp',
    {
      type: 'category',
      label: 'Smart Contract',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'dapps/smart-contracts',
        },
      ],
    },
  ],
  subnets: [
    'subnets/README',
    {
      type: 'category',
      label: 'Build',
      collapsed: false,
      items: [
        'subnets/create-a-local-subnet',
        'subnets/create-a-fuji-subnet',
        'subnets/deploying-subnets-on-prod',
        'subnets/setup-dfk-node',
        'subnets/deploy-a-smart-contract-on-your-evm',
        'subnets/create-a-evm-blockchain-on-subnet-with-avalanchejs',
        'subnets/create-a-fuji-subnet-subnet-cli',
        'subnets/create-a-stateful-precompile'
      ],
    },
    {
      type: 'category',
      label: 'Customize',
      collapsed: false,
      items: [
        'subnets/customize-a-subnet',
        'subnets/create-a-virtual-machine-vm',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: false,
      items: [
        'subnets/avalanche-subnet-faucet',
        'subnets/subnet-cli',
        'subnets/deploying-cross-chain-evm-bridge',
        'subnets/network-runner',
        'subnets/deploy-a-gnosis-safe-on-your-evm',
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      collapsed: false,
      items: [
          'subnets/spaces',
          'subnets/wagmi',
      ],
    },
    {
      type: 'link',
      label: 'Subnet FAQ',
      href: 'https://support.avax.network/en/articles/6158840-subnet-faq',
    },
  ],
  apis: [
    {
      type: 'category',
      label: 'AvalancheGo',
      items: [
        'apis/avalanchego/README',
        {
          type: 'category',
          label: 'APIs',
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'apis/avalanchego/apis',
            },
          ],
        },
        'apis/avalanchego/public-api-server',
        'apis/avalanchego/postman-avalanche-collection',
        'apis/avalanchego/avalanchego-release-notes',
        'apis/avalanchego/cb58-deprecation'
      ],
    },
    {
      type: 'category',
      label: 'AvalancheJS',
      collapsed: false,
      items: [
        'apis/avalanchejs/README',
        'apis/avalanchejs/api',
        'apis/avalanchejs/create-an-asset-on-the-x-chain',
        'apis/avalanchejs/manage-x-chain-keys',
        'apis/avalanchejs/send-an-asset-on-the-x-chain',
        'apis/avalanchejs/generate-a-txid-using-avalanchejs',
      ],
    },
    'apis/metrics'
  ],
  nodes: [
    'nodes/README',
    {
      type: 'category',
      label: 'Build',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes/build',
        },
      ],
    },
    {
      type: 'category',
      label: 'Maintain',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes/maintain',
        },
        {
          type: 'link',
          label: 'Avalanche Notify',
          href: 'https://notify.avax.network/',
        },
      ],
    },
    {
      type: 'category',
      label: 'Validate',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes/validate',
        },
      ],
    },
  ],

  specs: [
    'specs/coreth-arc20s',
    'specs/avm-transaction-serialization',
    'specs/coreth-atomic-transaction-serialization',
    'specs/cryptographic-primitives',
    'specs/network-protocol',
    'specs/serialization-primitives',
    'specs/platform-transaction-serialization',
    'specs/abigen',
  ],


  community: [
    'community/README',
    'community/bug-bounty',
    {
      type: 'link',
      label: 'Product Support',
      href: 'https://support.avax.network/en/',
    },
    {
      type: 'category',
      label: 'Tutorials Contest',
      collapsed: false,
      items: [
        'community/tutorials-contest/2022',
        'community/tutorials-contest/2021'
      ]
    },
  ],
};

module.exports = sidebars;
