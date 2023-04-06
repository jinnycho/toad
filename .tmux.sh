if [ -n "$TMUX" ]; then
  make all
else
  tmux new-session -- make all
fi 
