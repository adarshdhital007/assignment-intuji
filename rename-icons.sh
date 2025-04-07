#!/bin/bash

# Create directories if they don't exist
mkdir -p assets/icons
mkdir -p assets/sidebar

# Sidebar icons
if [ -f assets/sidebar/dashboard.svg ]; then
  mv assets/sidebar/dashboard.svg assets/sidebar/dashboard-icon.svg
fi

if [ -f assets/sidebar/calendar.svg ]; then
  mv assets/sidebar/calendar.svg assets/sidebar/calendar-icon.svg
fi

if [ -f assets/sidebar/message.svg ]; then
  mv assets/sidebar/message.svg assets/sidebar/message-icon.svg
fi

if [ -f assets/sidebar/analytics.svg ]; then
  mv assets/sidebar/analytics.svg assets/sidebar/analytics-icon.svg
fi

if [ -f assets/sidebar/team.svg ]; then
  mv assets/sidebar/team.svg assets/sidebar/team-icon.svg
fi

if [ -f assets/sidebar/profile.svg ]; then
  mv assets/sidebar/profile.svg assets/sidebar/profile-icon.svg
fi

if [ -f assets/sidebar/settings.svg ]; then
  mv assets/sidebar/settings.svg assets/sidebar/settings-icon.svg
fi

if [ -f assets/sidebar/help.svg ]; then
  mv assets/sidebar/help.svg assets/sidebar/help-icon.svg
fi

if [ -f assets/sidebar/logout.svg ]; then
  mv assets/sidebar/logout.svg assets/sidebar/logout-icon.svg
fi

# Header and UI icons
if [ -f assets/icons/notification-bing.svg ]; then
  mv assets/icons/notification-bing.svg assets/icons/notification-icon.svg
fi

if [ -f assets/icons/message-text.svg ]; then
  mv assets/icons/message-text.svg assets/icons/message-icon.svg
fi

if [ -f assets/icons/gallery.svg ]; then
  # Make copies for different uses
  cp assets/icons/gallery.svg assets/icons/user-avatar-icon.svg
  cp assets/icons/gallery.svg assets/icons/figma-icon.svg
  cp assets/icons/gallery.svg assets/icons/youtube-icon.svg
  cp assets/icons/gallery.svg assets/icons/spotify-icon.svg
  cp assets/icons/gallery.svg assets/icons/freepik-icon.svg
fi

if [ -f assets/icons/chevron-down.svg ]; then
  mv assets/icons/chevron-down.svg assets/icons/chevron-down-icon.svg
fi

# Card icons
if [ -f assets/icons/balance-icon.svg ]; then
  mv assets/icons/balance-icon.svg assets/icons/account-balance-icon.svg
fi

if [ -f assets/icons/balance-1.svg ]; then
  mv assets/icons/balance-1.svg assets/icons/trend-up-icon.svg
fi

if [ -f assets/icons/arrow-right.svg ]; then
  mv assets/icons/arrow-right.svg assets/icons/chevron-right-icon.svg
fi

if [ -f assets/icons/saving-icon.svg ]; then
  mv assets/icons/saving-icon.svg assets/icons/savings-icon.svg
fi

if [ -f assets/icons/saving-icon-mini.svg ]; then
  mv assets/icons/saving-icon-mini.svg assets/icons/trend-up-mini-icon.svg
fi

if [ -f assets/icons/expenses-icon.svg ]; then
  mv assets/icons/expenses-icon.svg assets/icons/expense-icon.svg
fi

if [ -f assets/icons/expenses-icon-mini.svg ]; then
  cp assets/icons/expenses-icon-mini.svg assets/icons/trend-up-mini-icon.svg
fi

if [ -f assets/icons/incomes-icon.svg ]; then
  mv assets/icons/incomes-icon.svg assets/icons/income-icon.svg
fi

if [ -f assets/icons/incomes-icon-mini.svg ]; then
  cp assets/icons/incomes-icon-mini.svg assets/icons/trend-up-mini-icon.svg
fi

echo "Icon renaming completed successfully!" 