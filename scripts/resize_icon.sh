#!/bin/bash
for size in 16 48 128
	do
    mkdir ./public/icons
    input_path=./src/assets/icon.png
    output_path=./public/icons/${size}.png
	cp $input_path $output_path
    # use sips in Mac OS by developer
	sips -Z $size $output_path
    done