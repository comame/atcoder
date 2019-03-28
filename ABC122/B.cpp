// https://atcoder.jp/contests/abc122/tasks/abc122_b

#include <iostream>
#include <string>

int main() {
    std::string s;
    std::cin >> s;

    int maxCount = 0;
    int tmpCount = 0;

    for (int i = 0; i < s.size(); i++) {
        char current = s[i];
        if (current == 'A' || current == 'C' || current == 'G' || current == 'T') {
            tmpCount++;
            if (tmpCount > maxCount) {
                maxCount = tmpCount;
            }
        } else {
            tmpCount = 0;
        }
    }
    
    std::cout << maxCount << std::endl;
}