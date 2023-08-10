import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => <Button>Default</Button>,
};

export const Outline: Story = {
  render: () => <Button variant="outline">Default</Button>,
};

export const Text: Story = {
  render: () => <Button variant="text">Default</Button>,
};

export const DisableShadow: Story = {
  render: () => <Button disableShadow>Default</Button>,
};

export const Disabled: Story = {
  render: () => <Button disabled>Disabled</Button>,
};

export const SizedButtons: Story = {
  render: () => (
    <>
      <Button>default</Button>
      <Button size="sm">small</Button>
      <Button size="md">medium</Button>
      <Button size="lg">large</Button>
    </>
  ),
  decorators: [
    (Story) => (
      <div
        style={{
          margin: "3em",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const PrimaryButton: Story = {
  render: () => <Button color="primary">primary</Button>,
};

export const SecondaryButton: Story = {
  render: () => <Button color="secondary">secondary</Button>,
};

export const DangerButton: Story = {
  render: () => <Button color="danger">danger</Button>,
};

export const StartIconButton: Story = {
  render: () => (
    <Button
      color="primary"
      startIcon={<span className="material-icons">add_shopping_cart</span>}
    >
      Default
    </Button>
  ),
};

export const EndIconButton: Story = {
  render: () => (
    <Button
      color="primary"
      endIcon={<span className="material-icons">add_shopping_cart</span>}
    >
      Default
    </Button>
  ),
};

export const AsLink: Story = {
  render: () => (
    <Button color="primary" as={"a"}>
      primary
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      },
    },
  },
};
