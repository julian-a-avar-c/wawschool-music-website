default:
    just --list

git-log:
    git log --graph --oneline --branches

git-clean-reflog:
    git reflog expire --expire=0.days.ago --expire-unreachable=now --all

build:
    pnpm build

start: build
    pnpm start

deploy:
    pnpm run vercel --prod
